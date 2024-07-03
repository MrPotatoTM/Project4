window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function showAnonymousQuotes(count) {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
}

function fetchQuotes(topic, count) {
   let xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";
   xhr.open("GET", "https://wp.zybooks.com/quotes.php?topic=" + topic + "&count=" + count);
   xhr.send()
}

function responseReceivedHandler(count) {
   if (this.status === 200) {
      if(this.response.error) {
         document.querySelector("#quotes").innerHTML = this.response.error
      }
      else {
         let html = "<ol>";
         for (quoteItem of this.response) {
            html += `<li>${quoteItem.quote} - ${quoteItem.source}</li>`;
         }
         html += "</ol>";

         document.querySelector("#quotes").innerHTML = html;
      }
   }
   else {
      document.querySelector("#quotes").innerHTML = "Quote API is unavailable.";
   }
   
}
