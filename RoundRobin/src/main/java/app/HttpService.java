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
        String url = "http://"+port+":6000/save";
        Request request = new Request.Builder()
                .url(url)
                .post(body)
                .build();
        System.out.println(port+"/save");
        Response response = httpClient.newCall(request).execute();
        return response.body().string();
    }

}
