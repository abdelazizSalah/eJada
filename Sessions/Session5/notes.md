# Session notes (Business process flow and java script)

* it guides me as an end user.

* b7ot kol stage, w a2ol eh ahm el m3lomat elly tl3t beha mn el stage de. 

* hya hadfha enk t5ly el user ymshy 3la steps mo3yna 34an tewsl ll target fl akher, aknk bt3ml sales cycle keda, lazm tbd2 b lead -> qualify -> develop -> close msln.
* fa el purpose, enk telzm el user eno ye3ml 7aga mo3yna.  

* fa hya btdeny conclusion lel 7asal, bdl ma ndkhol 3la profile kol sh5s w ndos fl details. 
* bnakhud molkhs 3am keda. 
* zorar el next by5lene atn2l mn stage le stage tanya gowa nfs el record( akny bamla bynat gdeda bs l nfs el shakhs. ).
* lakn lw khadt action (zy eny ados qualify msln fa keda ana bro7 le record gded.)
* da m3nah enk bta5ud shwyt details mn el table el fat w tro7 beha le table gded, fa da keda enta btro7 record gded fe table mo5talef. 
* fa keda enta lw 3mlt action zy enk tdos qualify, enta bt7wl el lead le potential customer. 
* lakn zorar el next, aknk bttn22l ben el columns bto3 nfs el record wnta 3mal temlahom. 
* zorar el next da byb2a mawgod fe el process progress flow.
* Maximum number of entities in a business process flow: 5
* Minimum number of entities in a business process flow: 1
* 3ndna 7aga esmha SLA, de btdy duration lel cycle
* flazm el opportunity de msln lazm t5ls fe w2t mo3yn aw keda.
* ffa el user bta3k aw el agent lazm y5ls el opportunity de fe el w2t da
* lw el duration 5elst, fa el opportunity de el mfrod tt2fl. 
* lw el user 7b yeft7ha tany, fe zorar esmo re-open opportunity.
* w lama bndos 3leha, byft7 duration mo3yn.
* lw 5lst, msh bynf3 neft7ha tany. 
  
  ---

# Inserting steps into each stage
* we have one of two ways:
  1. inserted manually
  2. using business rule. (recommended)
     1. to do this we need to make ...


# Security roles
* ay user bydkhul 3ndy fl system, byb2a leh shwyt sala7yat bs hya elly ye2dr ye3mlha, gher keda hwa limited. 
* el system adminstrator, byb2a aktur 7d leh roles. 
* w el manager ghalebn byb2a leh a2al roles, 34an byb2a a5ro ybos 3la dashboard msln. 
* hnshr7ha el session el gyaa.

# how many business process flow for single entity? 
* 1-10. 
* enta lkol entity, bt2dr enk t48l 3leha 10 business process flows, w te2dr tbdl benhom. 
* fa kol ma btst5dm entity gowa workflow, enta bt-increment 3dd el process flows bto3 el entity de. 

# how many stages for single business process flow?
* 1-30.

# how can we create a business process flow
* 1- go to settings -> processes -> new
* or we can find it in the default solution.

# Create process flow details 
* Process name 
* Category:
  *  Business process flow
  *  Action
  *  Dialog
  *  workflow
* Entity
  * choose the entity you want

> practice, practice, practice. 


# Conditions
* enta bdl ma tkon bt7ot stages bs fl flow, laa enta mmkn t7ot conditions.
* w lw el condition de true, enta bt7ot stage, w lw false, enta bt7ot stage tanya.

# Composiotion
* Data step
  * bngm3 data 3n el record da. 
* workflow 
  * 7aga bt3tmd 3la 7aga bt3tmd 3la 7aga, fa btshghl 7aga. 
* action step 
* flow step:
  * 