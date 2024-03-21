import { createClient } from "microcms-js-sdk";

// micro cmsの初期化
export const cmsClient = createClient({
    serviceDomain: process.env.CMSDOMAIN || '',
    apiKey: process.env.CMSAPIKEY || '',
});