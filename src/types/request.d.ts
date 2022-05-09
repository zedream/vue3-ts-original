interface ResponseData {
  data?
  errorCode: string
  msg: string
}

interface RequestMethods {
  get(url: string, params?: object): Promise<ResponseData>
  post(url: string, data: object): Promise<ResponseData>
  put(url: string, data: object): Promise<ResponseData>
  delete(url: string, data?: object): Promise<ResponseData>
  getBlob(url: string, params?: object, headers?, responseType?): Promise<BlobPart>
}
