
## Methods

| Name     | Type    | Description    |
|----------|---------|----------------|
| `getFile(url: string, destinationFilePath?: string): Promise<File>`   | `Promise<File>` | Downloads the content from the specified URL and attempts to save it as file. |
| `getImage(url: string): Promise<ImageSource>`   | `Promise<ImageSource>` | Downloads the content from the specified URL and attempts to decode it as an image. |
| `getJSON<T>(url: string): Promise<T>`   | `Promise<T>` | Downloads the content from the specified URL as a string and returns its JSON.parse representation. |
| `getString(url: string): Promise<string>`   | `Promise<string>` | Downloads the content from the specified URL as a string. |
| `request(options: HttpRequestOptions): Promise<HttpResponse>`   | `Promise<HttpResponse>` | Makes a generic http request using the provided options and returns a HttpResponse Object. |

## API References

| Name     | Type    | 
|----------|---------|
| [tns-core-modules/http](http://docs.nativescript.org/api-reference/modules/_http_.html) | `Module` | 
