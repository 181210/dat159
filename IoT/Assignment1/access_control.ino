//DO-LEDs
const int RED = 13;
const int YLW = 12;
const int GRN = 8;
//DI-BUTTONs
const int PUSH1 = 7;
const int PUSH2 = 4;
//DI-PIR
const int PIR = 2;

const int UNLOCKED = 5;
const int CONTROL = 6;
const int LOCKED = 3;

//State Of PBs
int PUSH1_State = 0;
int PUSH2_State = 0;

int state = LOCKED;
int PIR_state = LOW;
int sum_pb1 = 0;
int sum_pb2 = 0;


void setup()
{
  pinMode(RED, OUTPUT);
  pinMode(YLW, OUTPUT);
  pinMode(GRN, OUTPUT);
  
  pinMode(PUSH1, INPUT);
  pinMode(PUSH2, INPUT);
  
  pinMode(PIR, INPUT);
  
  Serial.begin(9600);
}

void loop(){
  PIR_state = digitalRead(PIR);
  if(PIR_state == HIGH){
    state = CONTROL;
  }
  
  switch(state){
    
    case CONTROL : 
    digitalWrite(RED, LOW);
    digitalWrite(YLW, HIGH);
    
    PUSH1_State = digitalRead(PUSH1);
  	PUSH2_State = digitalRead(PUSH2);
  
  	if(PUSH1_State == HIGH && PUSH2_State == LOW){
    sum_pb1 ++;
      if(sum_pb1 == 1 && sum_pb2 == 0){
        digitalWrite(YLW, LOW);
    	delay(500);
    	digitalWrite(YLW, HIGH);
      } else if(sum_pb1 > 1 || sum_pb2 > 0){
        state = LOCKED;
      }
    
  }
    
    if(PUSH1_State == LOW && PUSH2_State == HIGH){
      	digitalWrite(YLW, LOW);
    	delay(500);
    	digitalWrite(YLW, HIGH);
    sum_pb2 ++;
      if(sum_pb1 == 1 && sum_pb2 == 1){
        state = UNLOCKED;
      } else if(sum_pb1 < 0 || sum_pb2 > 1){
        state = LOCKED;
      }
  }
    break;
    
    case UNLOCKED :
    digitalWrite(GRN, HIGH);
    digitalWrite(YLW, LOW);
    delay(5000);
      state = LOCKED;
    break;
    
    case LOCKED:
    digitalWrite(RED, HIGH);
    digitalWrite(GRN, LOW);
    digitalWrite(YLW, LOW);
    sum_pb1 = 0;
    sum_pb2 = 0;
    break;
    
  }
}