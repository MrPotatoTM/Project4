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
   let xhr = new XMLHttpRequest()
   xhr.responseType = "json"
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.open("GET", "https://wp.zybooks.com/quotes.php?topic=love&count=3")
}

function responseReceivedHandler() {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += "<li>" + this.response.quote + "${c} - " + this.response.source + "</li>";
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
}
