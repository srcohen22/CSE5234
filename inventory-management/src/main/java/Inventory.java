import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/inventory")
public class Inventory {
	
	List<Item> inventory;
	private boolean add;
	
	public Inventory() {
		
	}
	
	@GET
	public String getItems() {
		System.out.println("here");
		return "Hello World";
	}
	
//	@GET
//	@Produces(MediaType.APPLICATION_JSON)
//	public Inventory getItems() {
//		Inventory current = new Inventory();
//		List<Item> available = new ArrayList<Item>();
//		available.add(new Item(0, "Food", 0, 0));
//		current.setItem(available);
//		return current;
//	}

	public void setItem(List<Item> items) {
		this.inventory = items;
	}
	
}