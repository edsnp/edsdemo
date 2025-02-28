

async function createTable(jsonURL) {
    try {
             
        const { href } = new URL(jsonURL);
        const response = await fetch(href);
        
        const json = await response.json();
        
        console.log(jsonURL);   
        const data = json.data;
         // Create table element
         const table = document.createElement('table');
        
         // Create table header
         const thead = document.createElement('thead');
         const headerRow = document.createElement('tr');
         
         // Extract column headers from the data keys
         const headers = Object.keys(data[0]);
         
         // Create header cells
         headers.forEach(header => {
             const th = document.createElement('th');
             th.textContent = header;
             headerRow.appendChild(th);
         });
         
         thead.appendChild(headerRow);
         table.appendChild(thead);
 
         // Create table body
         const tbody = document.createElement('tbody');
         
         // Create rows for each data entry
         data.forEach(item => {
             const row = document.createElement('tr');
             headers.forEach(header => {
                 const td = document.createElement('td');
                 td.textContent = item[header];
                 row.appendChild(td);
             });
             tbody.appendChild(row);
         });
 
         table.appendChild(tbody);
        return table;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default async function decorate(block) {
    const sheetJson = block.querySelector('a');
    
    if(sheetJson) {
        block.textContent = '';
        block.append(await createTable(sheetJson.href));
    }
}