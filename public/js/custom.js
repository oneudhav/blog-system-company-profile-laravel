var inpfile=document.getElementById('inpfile');
var imagefile=document.getElementById('img_field');

inpfile.addEventListener('change',function(){
file=this.files[0];
if(file){
	reader= new FileReader();
	reader.readAsDataURL(file);
	reader.addEventListener('load',function(){
		imagefile.setAttribute('src',this.result);
	});
}

});
