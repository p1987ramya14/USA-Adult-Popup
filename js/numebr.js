
          function getVariableFromURl(n0me)
          {
              n0me = n0me.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
              var regexS = "[\\?&]"+n0me+"=([^&#]*)";
              var regex = new RegExp( regexS );
              var results = regex.exec( window.location.href );
              if( results == null )
                  return "";
              else
                  return results[1];
          }