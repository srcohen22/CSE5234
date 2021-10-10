import java.util.List;
import javax.mail.FetchProfile.Item;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("inventory")
public class Inventory {
	
	List<Item> inventory;
	
	public Inventory() {
		
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Item> getItems() {
		return this.inventory;
	}
	
	public void setItem(List<Item> items) {
		this.inventory = items;
	}
	
}