bluetooth.startUartService()

pins.P0.analogWrite(0)
pins.P0.analogSetPeriod(100)

bluetooth.onUartDataReceived(bluetooth.NEW_LINE, () => {
   let command = bluetooth.uartReadUntil(bluetooth.NEW_LINE).split("")
   let dispositivo = command[0]
   let value = parseInt(command[1])

basic.showNumber(value)

   if(dispositivo == "LUZ"){
       pins.P0.analogWrite(pins.map(value,0,100, 0,1023))

   }
   else if(dispositivo == "LOCK"){
       pins.P1.digitalWrite((value == 1) ? true : false)
       
   }
   else{
       basic.showString("E")
       
   }
})

