function validateBirthDate(inputDate)
            {
                    const today = new Date();
                  const userDate = new Date(inputDate);
            
                  if (isNaN(userDate) || userDate > today) {
                
                    console.log("false");
                  } else {
                        console.log("true");
                      }
                    }

validateBirthDate('2025-2-2')




