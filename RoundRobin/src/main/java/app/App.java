package app;

import spark.Request;
import spark.Response;
import java.io.IOException;
import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.staticFileLocation;

public class App {

    public static int position = 0;
    public static final String[] ports = {"172.24.0.3","172.24.0.4","172.24.0.5"};

    public static void main(String... args){
        port(getPort());
        staticFileLocation("/static");
        get("hello", (req,res) -> "Hello Docker!");
        post("notify", (req,res) -> sendMessage(req,res));
    }

    public static String sendMessage(Request req, Response res) throws IOException {
        HttpService httpService = new HttpService();
        String data = httpService.doPost(req.body(), ports[position]);
        roundRobin();
        return data;
    }

    public static void roundRobin(){
        if(position >= ports.length-1){
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