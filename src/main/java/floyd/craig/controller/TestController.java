package floyd.craig.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import floyd.craig.model.TestObject;

@RestController
@RequestMapping("test")
public class TestController {	
	@RequestMapping(value = "")
	public TestObject getEmployeeInJSON(@RequestParam(value="name", defaultValue="World") String name) {
		TestObject testObject = new TestObject();
		testObject.setName(name);
		System.out.println("name: " + name);
		return testObject;
	}

	interface Query {
	    void runQuery();
	}

	@RequestMapping(value= "/views")
	public String[] getViews(){
		return (String[]) getQueries().keySet().toArray();
	}
	
	Map<String, Query> queries = null;
	public Map<String, Query> getQueries(){
		if (queries == null){
			queries = new HashMap<String, Query>();
			
			queries.put("All", new Query() {
	            public void runQuery() { System.out.println("help"); };
	        });
		}
		
		return queries;
	}
	
	//Put this request mapping on a non-REST controller to make sure that all non-routed requests go to the same file
	@RequestMapping(value = {"", "/", "{path:(?!WEB-INF|resources).*}/**"})
	public String homeController(){
		return "index";
	}
	
}


