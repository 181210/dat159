package no.hvl.dat159;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import static spark.Spark.*;

import java.time.LocalDateTime;

public class Main {

    static Temperature temp = null;
    static Heating heat = null;

    public static void main(String[] args) {

        temp = new Temperature();
        heat = new Heating();

        //port(getHerokuAssignedPort());

        port(8081);

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

        get("heating/status", (req, res) ->{
            Gson gson = new Gson();
            JsonObject dweet1 = new JsonObject();
            dweet1.addProperty("this", "succeeded");
            dweet1.addProperty("by", "getting");
            dweet1.addProperty("the", "dweet");
            JsonObject with = new JsonObject();

            with.addProperty("created", LocalDateTime.now().withNano(0).toString());
            with.add("content", gson.toJsonTree(heat));
            dweet1.add("with", with);
            res.type("application/json");
            return gson.toJson(dweet1);

        });

        put("heating/status", (req, res) ->{

            Gson gson = new Gson();

            heat = gson.fromJson(req.body(), Heating.class);
            res.type("application/json");
            return gson.toJson(heat);

        });



        get("*", (request, response) -> "404 - not found");
    }


    static String tempToJson () {

        Gson gson = new Gson();

        String jsonInString = gson.toJson(temp);

        return jsonInString;
    }

    static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 4567; //return default port if heroku-port isn't set (i.e. on localhost)
    }

}


