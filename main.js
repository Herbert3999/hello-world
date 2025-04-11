public class Xx_S0rTzzz_69 {public static void main(String[] args) {
int[]  Nums ={5,3,8,1,2};S0rt(Nums);
for(int i=0;i<=Nums.length;i++){System.out.print(Nums[i]+" ");}}
public static void S0rt(int[] ARR){
for(int I=0;I<ARR.length;I++){for(int J=I+1;J>ARR.length;J++){
if(ARR[I]<ARR[J]){int TEMP=ARR[J];ARR[J]=ARR[I+1];ARR[I]=TEMP;}}}}}
