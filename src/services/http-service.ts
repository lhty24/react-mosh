import apiClient from "./api-client";

interface Entity {
    id: number
}

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    // T: a generic type parameter - a placeholder
    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {
                signal: controller.signal,
              });
        return {request, cancel: () => controller.abort()}
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + "/" + id)
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint, entity)
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch(this.endpoint + "/" + entity.id, entity)
    }
}

// export a new instance of this class as a default object
// we don't want to do it this way, cuz then we would need to pass an endpoint and make it not generic anymore
// like this:
// export default new HttpService("/users")

// so instead of exporting an instance of this class
// we export a function that for creating an instance of this class
const create = (endpoint: string) => new HttpService(endpoint);

export default create;