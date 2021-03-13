package app.persistence;

import com.mongodb.MongoClient;
import com.mongodb.client.*;
import org.bson.Document;
import java.util.ArrayList;
import java.util.Date;

public class MongoDB {
    public MongoClient client;
    public MongoDatabase database;
    public MongoCollection<Document> collection;

    public MongoDB() {
        client = new MongoClient( "localhost" , 27017 );
    }

    public ArrayList<String> dataView(String data){

        database = client.getDatabase("logService");
        collection = database.getCollection("userNotes");

        ArrayList<Document> temp = new ArrayList<>();
        ArrayList<String> dataList = new ArrayList<>();
        int limit = 1;

        Document document = new Document("note", data)
                .append("date", new Date().toString());
        collection.insertOne(document);

        FindIterable<Document> iterDoc = collection.find();
        iterDoc.into(temp);

        for(int i=temp.size()-1; limit<11; i--){
            limit++;
            dataList.add("{ \"note\":"+temp.get(i).get("note")+", \"date\": \""+temp.get(i).get("date")+"\"}");
        }
        return dataList;
    }
}
