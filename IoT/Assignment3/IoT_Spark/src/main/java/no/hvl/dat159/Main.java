package no.hvl.dat159;



import com.google.gson.Gson;
import com.google.gson.JsonObject;

import static spark.Spark.*;

import java.time.LocalDateTime;

public class Main {

    static Temperature temp = null;

    public static void main(String[] args) {

        temp = new Temperature();

        port(4565);


        get("tempsensor/current", (req, res) -> {
            Gson gson = new Gson();
            JsonObject dweet = new JsonObject();
            dweet.addProperty("this", "succeeded");
            dweet.addProperty("by", "getting");
            dweet.addProperty("the", "dweet");
            JsonObject with = new JsonObject();

            with.addProperty("created", LocalDateTime.now().withNano(0).toString());
            with.add("content", gson.toJsonTree(temp));
            dweet.add("with", with);
            res.type("application/json");
            return gson.toJson(dweet);
        });

        put("tempsensor/current", (req,res) -> {

            Gson gson = new Gson();

            temp = gson.fromJson(req.body(), Temperature.class);
            res.type("application/json");
            return gson.toJson(temp);

        });

        get("*", (request, response) -> "404 - not found");
    }

    static String tempToJson () {

        Gson gson = new Gson();

        String jsonInString = gson.toJson(temp);

        return jsonInString;
    }

}
