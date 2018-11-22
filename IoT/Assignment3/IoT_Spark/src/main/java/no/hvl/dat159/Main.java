package no.hvl.dat159;


import com.google.gson.Gson;
import com.google.gson.JsonObject;
import static spark.Spark.*;



public class Main {

    static Temperature temp = null;

    public static void main(String[] args) {

        temp = new Temperature();


        port(getHerokuAssignedPort());


        get("/tempsensor/current", (req, res) -> {

            Gson gson = new Gson();

            JsonObject dweet = new JsonObject();
            dweet.addProperty("this", "succeeded");
            dweet.addProperty("by", "getting");

            JsonObject with = new JsonObject();
            with.addProperty("thing", "temperature_sensor");
            with.addProperty("content", gson.toJson(temp));
            dweet.add("with", with);
            res.type("application/json");

            return gson.toJson(dweet);


        });

        //Testing purpose:
        System.out.println(tempToJson());


        put("/tempsensor/current", (req, res) -> {

            Gson gson = new Gson();

            temp = gson.fromJson(req.body(), Temperature.class);

            res.type("application/json");

            return gson.toJson(temp);

        });

        get("*", ((request, response) -> "404 - not found"));
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
        return 4567; //default port
    }
}

