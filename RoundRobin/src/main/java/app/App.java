package app;

import spark.Request;
import spark.Response;

import java.io.IOException;
import java.util.Date;
import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.staticFileLocation;
import okhttp3.*;

public class App {

    public static int position = 0;
    public static final String[] ports = {"35001","35002","35003"};

    public static void main(String... args){
        port(getPort());
        staticFileLocation("/static");
        get("hello", (req,res) -> "Hello Docker!");
        post("notify", (req,res) -> sendMessage(req,res));
    }

    public static String sendMessage(Request req, Response res) throws IOException {

        OkHttpClient httpClient = new OkHttpClient();
        System.out.println("ome");
        System.out.println(req.body());
        RequestBody formBody = RequestBody.create(req.body(), MediaType.parse("application/json; charset=utf-8"));
        okhttp3.Request rqst = new okhttp3.Request.Builder()
                .url("http://localhost:"+ports[position]+"/save")
                .post(formBody)
                .build();
        okhttp3.Response response = httpClient.newCall(rqst).execute();
        roundRobin();
        return response.body().string();
    }

    public static void roundRobin(){
        if(position >= ports.length){
            position = 0;
        }else{
            position+=1;
        }
    }
    private static int getPort() {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 4567;
    }

}