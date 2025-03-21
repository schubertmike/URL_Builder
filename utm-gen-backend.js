
//function to combine and output the url inputs
function generateUTM() {

//inputting field values
const url = document.getElementById('weburl').value;
const source = document.getElementById('utm_source').value;
const medium = document.getElementById('utm_medium').value;
const campaign = document.getElementById('utm_campaign').value;
const content = document.getElementById('utm_content').value;
  

/*create an array of required fields
const requiredFields = [url, source, medium, name]

requiredFields.forEach(field => {
	if (!field.value) {
// if field empty, highlight and set all fields filled to false
		field.style.border = '1px solid red'; //red border
		field.style.backgroundColor = '#ffcccc'; //light red color
		allFieldsFilled = false;
	} else {
		//if field is filled, reset the styles
		field.style.border = '';
		field.style.backgroundColor = '';
	}

});

  // If not all required fields are filled, do not generate the UTM string
  if (!allFieldsFilled) {
    document.getElementById('utmOutput').innerText = ''; // Clear the output
    return; // Stop further execution
  }
  */



  //base url and build string
  let utmString = url ? url + '?' : '';
  if (source) utmString += `utm_source=${source}`;
  if (medium) utmString += `${utmString.includes('utm_source') ? '&' : ''}utm_medium=${medium}`;
  if (campaign) utmString += `${utmString.includes('utm_medium') || utmString.includes('utm_source') ? '&' : ''}utm_content=${campaign}`;
  if (content) utmString += `${utmString.includes('utm_content') || utmString.includes('utm_medium') || utmString.includes('utm_source') ? '&' : ''}utm_campaign=${content}`;

  //output result
  document.getElementById('utmOutput').innerText = utmString;
}

function clipboardCopy() {
  var copyText = document.getElementById('utmOutput').innerText; // Get text inside <p>

  navigator.clipboard.writeText(copyText).then(() => {
    var tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = "Copied to clipboard";

    // Reset tooltip text after 2 seconds
    setTimeout(() => {
      tooltip.innerHTML = "Copy URL";
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}
