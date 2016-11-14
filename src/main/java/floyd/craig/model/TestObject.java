package floyd.craig.model;

import javax.persistence.Entity;

@Entity
public class TestObject {
	private String _name;	
	
	public TestObject(){
		System.out.println("Test Object Created");
	}
	
	public String getName(){
		return _name + " Floyd";
	}
	
	public void setName(String value){
		this._name = value;
	}
}
