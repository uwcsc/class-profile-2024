import { publicRuntimeConfig } from "../next.config.js";
const { basePath } = publicRuntimeConfig as any;
export { basePath };
