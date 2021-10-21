package edu.osu.cse5234.business;

public class Item {

	int id;
	String name;
	String description;
	int cart_quantity;
	int temp_quantity;
	double price;
	String image;
	
	public Item () {
		
	}
	
	public Item(int id, String name, String description, int cart_quantity, int temp_quantity, double price, String image) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.cart_quantity = cart_quantity;
		this.temp_quantity = temp_quantity;
		this.price = price;
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getCart_quantity() {
		return cart_quantity;
	}

	public void setCart_quantity(int cart_quantity) {
		this.cart_quantity = cart_quantity;
	}

	public int getTemp_quantity() {
		return temp_quantity;
	}

	public void setTemp_quantity(int temp_quantity) {
		this.temp_quantity = temp_quantity;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
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

	public double getPrice() {
		return this.price;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}
}
