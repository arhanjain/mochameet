// import { createInstance } from '$lib/pocketbase'
// import type { Handle } from '@sveltejs/kit'

// export const handle: Handle = async ({ event, resolve }) => {
//   const pb = createInstance()

//   // load the store data from the request cookie string
//   pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')
//   try {
//     // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
//     if (pb.authStore.isValid) {
//       await pb.collection('users').authRefresh()
//     }
//   } catch (_) {
//     // clear the auth store on failed refresh
//     pb.authStore.clear()
//   }

//   event.locals.pb = pb
//   event.locals.user = pb.authStore.model

//   const response = await resolve(event)

//   // send back the default 'pb_auth' cookie to the client with the latest store state
//   response.headers.set(
//     'set-cookie',
//     pb.authStore.exportToCookie({ httpOnly: false })
//   )

//   return response
// }

import { redirect, type Handle } from '@sveltejs/kit';
import { createInstance } from '$lib/pocketbase'
import PocketBase from 'pocketbase';
import { building } from '$app/environment';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.id = '';
    event.locals.email = '';
    event.locals.pb = createInstance();

    const isAuth: boolean = event.url.pathname === '/auth';
    if (isAuth || building) {
      event.cookies.set('pb_auth', '', { path: '/' }); 
      return await resolve(event);
    }

    const pb_auth = event.request.headers.get('cookie') ?? '';
    event.locals.pb.authStore.loadFromCookie(pb_auth);

    if (!event.locals.pb.authStore.isValid) {
      console.log('Session expired');
      throw redirect(303, '/auth');
    }
    try {
        const auth = await event.locals.pb
            .collection('users')
            .authRefresh<{ id: string; email: string }>();
        event.locals.id = auth.record.id;
        event.locals.email = auth.record.email;
    } catch (_) {
        throw redirect(303, '/auth');
    }

    if (!event.locals.id) {
        throw redirect(303, '/auth');
    }

    const response = await resolve(event);
    const cookie = event.locals.pb.authStore.exportToCookie({ sameSite: 'lax' });
    response.headers.append('set-cookie', cookie);
    return response;
};
