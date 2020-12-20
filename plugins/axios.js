export default async function ({ $axios, store, app }, inject)
{
    //Custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
            },
        },
        baseURL: process.env.backendUrl,
        timeout: 10000,
    });

    // Inject to context as $api
    inject("api", api);
}
