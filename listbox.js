function listbox(list_id,txt_id){
	this.txt_id = txt_id
	this.list_id = list_id
	this.clear_all = function(){
			var s = document.getElementById(this.list_id)
			var len = s.length
			for(var i=0;i<len;i++){
				s.remove(0)
			}    		
	}
	this.moveup = function(){
			var s = document.getElementById(this.list_id)
			var i = s.selectedIndex;
			if(i == -1)return 0;
			var val = s[i].label
			if(i!=0){
				s.remove(i)
				var option = document.createElement("option");
				option.text = val
				s.add(option,i-1)
			}
	}

	this.movedown = function(){
			var s = document.getElementById(this.list_id)
			var i = s.selectedIndex;
			if(i == -1)return 0;
			var val = s[i].label
			if(i!=s.length){
				s.remove(i)
				var option = document.createElement("option");
				option.text = val
				s.add(option,i+1)
			}
	}

	this.totext = function(){
		var s = document.getElementById(this.list_id)
			var text = ''
			for(var i = 0;i<s.length;i++){
				console.log(s[i])
				text+= s[i].label+"\n"
			}
			document.getElementById(this.txt_id).value = text
	    }

	    this.tolist = function(){
			var s = document.getElementById(this.list_id)
			var text = document.getElementById(this.txt_id).value 
			var list = text.split("\n")
			this.clear_all()
			for(var i = 0;i<list.length;i++){
				var option = document.createElement("option");
				option.text = list[i]
				s.add(option,i)
			}
	    }

} 
