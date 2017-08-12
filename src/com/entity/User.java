package com.entity;

public class User { 
	private String id;
    private String username;
    private String password;
    private String company;
    private String companyaddress;
    private String telphone;
    private String department; 
    private String post; 
    private String email;
    private String OpenDate;
    private String AvailableTime;
    private String fpr;
    private String cookie;
    private Integer isopensoftware;
    
    
	public String getCompany() {
		return company;
	}
	public Integer getIsopensoftware() {
		return isopensoftware;
	}
	public void setIsopensoftware(Integer isopensoftware) {
		this.isopensoftware = isopensoftware;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getCookie() {
		return cookie;
	}
	public void setCookie(String cookie) {
		this.cookie = cookie;
	}
	public String getFpr() {
		return fpr;
	}
	public void setFpr(String fpr) {
		this.fpr = fpr;
	}
	public String getCompanyaddress() {
		return companyaddress;
	}
	public void setCompanyaddress(String companyaddress) {
		this.companyaddress = companyaddress;
	}
	public String getTelphone() {
		return telphone;
	}
	public void setTelphone(String telphone) {
		this.telphone = telphone;
	}
	public String getAvailableTime() {
		return AvailableTime;
	}
	public void setAvailableTime(String availableTime) {
		AvailableTime = availableTime;
	}
	public String getOpenDate() {
		return OpenDate;
	}
	public void setOpenDate(String openDate) {
		OpenDate = openDate;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
}
