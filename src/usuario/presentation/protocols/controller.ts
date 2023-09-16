import { HttpResponse } from "./http";

export interface Controller<T = any> {
    lidar: (request: T) => Promise<HttpResponse>
}