#!/bin/bash

 # simple script menu

 break

 function optionone {

 clear

 echo "option 1"

 }

 function optiontwo {

 clear

 echo "option 2"

 }

 function optionthird {

 clear

 echo "option 3"

 }

 function menu {

 clear

 echo

 echo -e "\t\t\tExample Menu\n" 

 echo -e "\t1. First Option" 

 echo -e "\t2. Second Option" 

 echo -e "\t3. Third Option" 

 echo -e "\t0. Exit program\n\n"

 echo -en "\t\tEnter options: "

 read -n 1 option

 }

 while [ 1 ]

 do

 menu

 case $option in

 0)

 break ;;

 1)

 optionone ;;

 2)

 optiontwo ;;

 3)

 optionthird ;;

 *)

 clear

 echo "Wrong Entering option menus";;

 esac

 echo -en "\n\n\t\tPress any key to continue"

 read -n 1 line

 done

 clear
