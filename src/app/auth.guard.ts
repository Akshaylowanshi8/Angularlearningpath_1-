import { inject } from '@angular/core';
import { CanActivateFn , Router  } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
const _router=inject(Router)

let islogin = sessionStorage.getItem("islogin") 
if(islogin=="false")
{
  alert("please login ")
  _router.navigate(["login"])
  return false 
}

return true;
};
