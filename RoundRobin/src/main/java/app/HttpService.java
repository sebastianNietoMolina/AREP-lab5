package app;

import okhttp3.*;
import java.io.IOException;


public class HttpService {

    public final MediaType JSON = MediaType.get("application/json; charset=utf-8");
    public OkHttpClient httpClient;

    public HttpService() {
        httpClient = new OkHttpClient();
    }

    public String doPost(String note, String port) throws IOException {
        RequestBody body = RequestBody.create(note,JSON);
        Request request = new Request.Builder()
                .url("http://localhost:4568/save")
                .post(body)
                .build();
        Response response = httpClient.newCall(request).execute();
        return response.body().string();
    }

}
