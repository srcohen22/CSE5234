
public class Item {

	int id;
	String name;
	int availableQuantity;
	double price;
	
	public Item(int id, String name, int q, double p) {
		this.id = id;
		this.name = name;
		this.availableQuantity = q;
		this.price = p;
	}
	
	public int getId() {
		return this.id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getQuantity() {
		return this.availableQuantity;
	}
	
	public void setQuantity(int quant) {
		this.availableQuantity = quant;
	}
	
	public double getPrice() {
		return this.price;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}
}
