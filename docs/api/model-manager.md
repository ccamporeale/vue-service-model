# ModelManager API

```typescript
class ModelManager {
  // Retrieve specific model instance from service
  public async detail (pk: PrimaryKey, params?: RetrieveInterfaceParams): Promise<ServiceModel>

  // Retrieve list of model instances from service
  public async list (params?: RetrieveInterfaceParams): Promise<Array<ServiceModel>>

  // Create single instance
  public async create (data: any, params?: CreateInterfaceParams): Promise<any>

  // Update single instance
  public async update (pk: PrimaryKey, data: any, params?: UpdateInterfaceParams): Promise<any>

  // Delete single instance
  public async delete (pk: PrimaryKey, params?: DeleteInterfaceParams): Promise<null>

  // Build config for axios retrieve request
  // Gets called from `sendListRequest` and `sendDetailRequest` to return the request configuration for axios
  public async buildRetrieveRequestConfig (params?: RetrieveInterfaceParams): Promise<any>

  // Send actual detail service request and map data before caching
  // Gets called when doing a detail with objects.detail()
  public async sendDetailRequest (
    options: ServiceStoreOptions,
    url: string,
    pk: PrimaryKey,
    params?: RetrieveInterfaceParams
  ): Promise<ResponseData>

  // Map raw response data from detail service request before cache
  // Gets called from sendDetailRequest with the response data before the data will be cached
  public async mapDetailResponseBeforeCache (
    options: ServiceStoreOptions,
    data: Array<ResponseData>,
    url: string,
    pk: PrimaryKey,
    params?: RetrieveInterfaceParams
  ): Promise<ResponseData>

  // Send actual list service request and map data before caching
  // Gets called when doing a list request with objects.list()
  public async sendListRequest (
    options: ServiceStoreOptions,
    url: string,
    params?: RetrieveInterfaceParams
  ): Promise<Array<ResponseData>>

  // Map raw response data from list service request before cache
  // Gets called from sendListRequest with the response data before the data will be cached
  public async mapListResponseBeforeCache (
    options: ServiceStoreOptions,
    data: Array<ResponseData>,
    url: string,
    params?: RetrieveInterfaceParams
  ): Promise<Array<ResponseData>>

  // Send actual create (POST) service request
  // Gets called when doing a create request with objects.create()
  public async sendCreateRequest (url: string, data: any, params?: CreateInterfaceParams): Promise<any>

  // Send actual update (PUT) service request
  // Gets called when doing an update request with objects.update()
  public async sendUpdateRequest (url: string, pk: PrimaryKey, data: any, params?: UpdateInterfaceParams): Promise<any>

  // Send actual partial update (PATCH) service request
  // Gets called when doing an update request with objects.update({partial: true)
  public async sendPartialUpdateRequest (
    url: string,
    pk: PrimaryKey,
    data: any,
    params?: UpdateInterfaceParams
  ): Promise<any>

  // Send actual delete (DELETE) service request
  // Gets called when doing a delete request with objects.delete()
  public async sendDeleteRequest (url: string, pk: PrimaryKey, params?: DeleteInterfaceParams): Promise<null>

  // Receive error from service and map to api exceptions
  public async handleResponseError (error: any)
}
```

## RetrieveInterfaceParams

```typescript
/**
 * Interface params for ModelManager detail and list
 */
interface RetrieveInterfaceParams {
  /**
   * Service parents to handle nested RESTful services
   */
  parents?: ServiceParent,
  /**
   * Filter params as plain object which will be converted to query parameters (params in axios)
   */
  filter?: FilterParams
  /**
   * Do not use and set response cache. Requests will still be aggregated. Already cached data will not be cleared
   */
  noCache?: boolean
  /**
   * Do not use request aggregation. Response will still be set and used from cache
   */
  noRequestAggregation?: boolean
  /**
   * Cache will not be used but set. Requests will still be aggregated
   */
  refreshCache?: boolean
}
```

## CreateInterfaceParams

```typescript
/**
 * Interface params for ModelManager create
 */
interface CreateInterfaceParams {
  /**
   * Service parents to handle nested RESTful services
   */
  parents?: ServiceParent
}
```

## UpdateInterfaceParams

```typescript
/**
 * Interface params for ModelManager update
 */
interface UpdateInterfaceParams {
  /**
   * Service parents to handle nested RESTful services
   */
  parents?: ServiceParent,

  /**
   * Flag whether a partial update (PATCH) should be send or not
   */
  partial?: boolean
}
```

## DeleteInterfaceParams

```typescript
/**
 * Interface params for ModelManager delete
 */
interface DeleteInterfaceParams {
  /**
   * Service parents to handle nested RESTful services
   */
  parents?: ServiceParent
}
```