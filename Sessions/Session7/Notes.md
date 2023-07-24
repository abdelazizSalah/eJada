# Processes Notes.
* open process. 
* insert the process name. 
* good conventions: 
  * first word should be the name of the cycle which the process is related to. 
  * the name of the process should be representive, so it should allow me to have an idea, what does it do.
  * Business process flow.  
  * Dialog: is a small window, in which the user insert data, and after he presses next, it opens another window to continue the process. 
  * Action: similar to the workflow, but it takes inputs from the user.
  * Workflow: is a process (certain steps.) in which we wait for a certain trigger, and after this trigger is fired, we do some actions.
  * the workflow is build on only one entity, but it can controls many other entities. 
  * there is an option called **Run this workflow in the background (recommended)**, this means that the user will not be able to see the workflow, and it will be executed in the background.
  * why it is recommended?
    * because if there is an error, it will not appear to the user. 
    * moreover, the real time processes takes more resources from the server, so it exhaust the system.  
  * Type: 
    * New blank process: 
      * this is a completly new process. 
    * New process from an existing template. 
      * da byb2a 3ndy template ana mghzo 34an hwa b2dr anfzo 3la kaza processes. 
      > to be able to create a template process, we create a blank template first , then there is an option which we choose, to make this new process as a template process.
    
# New Process options
* As an on-demand process
    * da option by5ly el process de b7yslha run lama user ydos 3la button masalan. 
    * example: 
* As a child process: 
    * de m3naha enha process a2dr a7otha gowa process tanya. 
* Run this workflow in the background. (etklmna 3nha abl keda.)
    * mmkn tla2eha faded keda. 
    * da m3nah enk mt2drsh t8yrha? hahaaaw, la2 a2dr. 
    * da 3n tre2 fe zorar fo2 keda esmo Convert to a real-time workflow. 
* Automatically delete completed workflow jobs (to save disk space)
    * fe el 3ady enta byb2a 3ndk log file.
    * by5zn el success wl fail.
    * fa el zorar da byms7lk kol el success log, 34an byb2a malhosh lazma 34an ywfrlk msa7a. 
* Scope:
    * da 3bara 3n el shakhs aw keda. 
    * bn2ol lel process eshtghly 3la el shakhs da. 
    * lw el workflow el ana 7atetha gowaha process, w e scope da mlhosh el sala7yat eno y3mll el process de
    * hytl3lk fl log file fail. 
    * aknk bt2ol gowa el process 5ly el scope da yft7 el bab, bs el scope m3hosh mofta7, fa msh hy3rf yeft7. 
* Start when: (the process trigger)
  *  Record is created:
  *  Record status changes:
     *  da el status bta3 el record etghyr. 
  *  Record is assigned: 
     *  the owner of this record is changed. 
  *  Record fields change:
  *  Record is deleted: