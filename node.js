 
        	const showCount = document.getElementById("num-el")
            const showEntries = document.getElementById("entries-el")
            const showSum = document.getElementById("sum-el")
            const saveBtn = document.getElementById("save")
            
            saveBtn.disabled = true
            
            let count = 0
            let saved = 0
            let sum = 0
            function increment() {
            	count ++
                showCount.textContent = count
                saveBtn.disabled = false
            }
            function save() {
            	saved = count
                showEntries.textContent += "| " + saved + " |"
                showSum.textContent = " "
                TotalEntries()
                count = 0
                showCount.textContent = 0
                saveBtn.disabled = true	
             }
            function TotalEntries() {
            	sum += count
                showSum.textContent = " " + sum 
            }
            function reset() {
            	count = 0
                sum = 0
                saved = 0
                showCount.textContent = 0
                showSum.textContent = " "
                showEntries.textContent = " "
                saveBtn.disabled = true
            }
        