
							var path = location.pathname;
							
			 			$("input[value='Download PDF']").css("color", "black").attr("download", true);
						 
						 var test = $("input[value='Download PDF']").attr("onclick");
						 var stripped  = test.slice(13,-11);
						 
						 var table = $("input[value='Download PDF']").closest('table');
						 table.css("background-color","yellow");
						 var attachmentTD = table.parentsUntil('table').find("td:eq(2)");
						 var attachmentLinks = attachmentTD.find('a');
						 
						 
						 var attachment = {};
						 attachmentLinks.each(function() {
						 	
    					var attachments = $(this).attr('href');
    					//console.log(attachments);
    					var attachmentsNames = $(this).html();
    					attachment[attachmentsNames] = attachments;
    
							});
							
				
						 //console.log("EYSEEFSDF /n");
						 console.dir(attachment);
						 attachmentTD.css("background-color","red");
						 //console.log(nextTable);
							
							var outerTable = $('table[width="780"] td');
							//$('table[width="780"] td').css("background-color","blue").append("<a download='test.pdf' href='"+stripped+"' >download</a>");
							//console.log("fuck");
							
							outerTable.css("border-color", "red");
							var counter = 0;
							 $("table").each(function() {
							 	
							 	$(this).attr("id", counter++);
    					//console.log(counter++);
							});
							
							
						
							var shipTo = $('td').filter(function(){
    					return $(this).text() === 'Ship to'
							});
							var shipToValue = shipTo.next().html();
							
							var custPO = $('td').filter(function(){
    					return $(this).text() === 'Cust PO'
							});
							var custPOValue = custPO.next().html();
														
							var soldTo = $('td').filter(function(){
    					return $(this).text() === 'Sold To'
							});
							var soldToValue = soldTo.next().html();
							
							
							//console.log(shipToValue) + "\n";
							//console.log(custPOValue) + "\n";
							//console.log(soldToValue) + "\n";
							//console.log("\n");
							
							var LWO = $('td').filter(function(){
    					return $(this).text() === 'LWO#'
							});
							var LWOValue = LWO.next().html();
							
							var CartID = $('td').filter(function(){
    					return $(this).text() === 'Cart ID'
							});
							var CartIDValue = CartID.next().html();
														
							var DecoGroup = $('td').filter(function(){
    					return $(this).text() === 'Deco Group'
							});
							var DecoGroupValue = DecoGroup.next().html();
							
							var OrderDate = $('td').filter(function(){
    					return $(this).text() === 'Order Date'
							});
							var OrderDateValue = OrderDate.next().html();
							
							var RequestedDate = $('td').filter(function(){
    					return $(this).text() === 'Requested Date'
							});
							var RequestedDateValue = RequestedDate.next().html();
														
							var ShipVia = $('td').filter(function(){
    					return $(this).text() === 'Ship Via'
							});
							var ShipViaValue = ShipVia.next().html();
																							
							var Vendor = $('td').filter(function(){
    					return $(this).text() === 'Vendor'
							});
							var VendorValue = Vendor.next().html();
							
							var LWO = $("td:contains(Ship to)").find("td:eq(26)").html();
							var CartID = $("td:contains(Ship to)").find("td:eq(28)").html();
							var DecoGroup = $("td:contains(Ship to)").find("td:eq(30)").html();
							var OrderDate = $("td:contains(Ship to)").find("td:eq(32)").html();
							var RequestedDate = $("td:contains(Ship to)").find("td:eq(34)").html();
							var ShipVia = $("td:contains(Ship to)").find("td:eq(36)").html();
							var Vendor = $("td:contains(Ship to)").find("td:eq(38)").html();

							//console.log(LWOValue) + "\n";
							//console.log(CartIDValue) + "\n";
							//console.log(DecoGroupValue) + "\n";
							//console.log(OrderDateValue) + "\n";
							//console.log(RequestedDateValue) + "\n";
							//console.log(ShipViaValue) + "\n";
							//console.log(VendorValue) + "\n";
							//console.log("\n");

							var RepName = $('td').filter(function(){
    					return $(this).text() === 'Rep'
							});
							var RepNameValue = RepName.next().html();
							
							var RepPhoneValue = RepName.next().next().html();
							
							var RepEmailValue = RepName.next().next().next().html();

							var CSRName = $('td').filter(function(){
    					return $(this).text() === 'CSR'
							});
							var CSRNameValue = CSRName.next().html();
							
							var CSRPhoneValue = CSRName.next().next().html();
							
							var CSREmailValue = CSRName.next().next().next().html();
						
						
							//console.log(RepNameValue) + "\n";
							//console.log(RepPhoneValue) + "\n";
							//console.log(RepEmailValue) + "\n";
							//console.log(CSRNameValue) + "\n";
							//console.log(CSRPhoneValue) + "\n";
							//console.log(CSREmailValue) + "\n";
							
							
							
							$.post( 
                  "https://teamgearprinting.com/pluginProcess.php",
                  { PDF_NAME: LWOValue+".pdf",
                  	PDF_URL: "https://shop.ssgecom.com/" + stripped,
                  	ATTACHMENT: attachment,
                  	SHIP_TO: shipToValue,
                  	CUST_PO: custPOValue,
                  	SOLD_TO: soldToValue,
                  	LWO: LWOValue,
                  	CART_ID: CartIDValue,
                  	DECO_GROUP: DecoGroupValue,
                  	ORDER_DATE: OrderDateValue,
                  	REQUESTED_DATE: RequestedDateValue,
                  	SHIP_VIA: ShipViaValue,
                  	VENDOR: VendorValue,
                  	REP_NAME: RepNameValue,
                  	REP_PHONE: RepPhoneValue,
                  	REP_EMAIL: RepEmailValue,
                  	CSR_NAME: CSRNameValue,
                  	CSR_PHONE: CSRPhoneValue,
                  	CSR_EMAIL: CSREmailValue
      						 })
      						  .done(function(msg){ 
      						  	console.log(msg);
      						  	 })
    								.fail(function(xhr, status, error) {
       								 // error handling
       								 console.log(xhr);
       								 console.log(status);
       								 console.log(error);
       						 
   									});
               

						


