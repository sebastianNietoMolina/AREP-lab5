package app;

import app.persistence.MongoDB;
import spark.Request;
import spark.Response;

import java.util.ArrayList;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.post;

public class App {

    public static void main(String... args){
        port(getPort());
        get("hello", (req,res) -> "Hello Docker!");
        post("save", (req,res) -> sendMessage(req,res));
    }

    public static ArrayList<String> sendMessage(Request req, Response res) {
        MongoDB mongoDB = new MongoDB();
        ArrayList<String> data = mongoDB.dataView(req.body());
        return data;
    }

    private static int getPort() {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 4568;
    }

}