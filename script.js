const inputMap = new Map([
  ["resultant force", "A Resultant force is a single force that can represent a number of forces acting on an object in both magnitude and direction."],
  ["electric field", "An Electric field is a region in which an electric charge experiences a force."],
  ["weightlessness", "Weightlessness is the sensation experienced when all contact forces are removed."],
  ["frictional force", "Frictional force is the force that opposes the motion of an object and which acts parallel to the surface."],
  ["kinetic friction","Kinetic friction is the force that opposes the motion of a moving object relative to the surface."],
  ["electric field at a point", "Electric field at a point is the force per unit charge at that point."],
  ["resultant vector", "A Resultant Vector is a single vector having the same effect as two or more vectors acting together."],
  ["closed vector diagram", "A Closed Vector Diagram is a set of vectors drawn on the cartesian plane using the tail to head method and that has a resultant with a magnitude of zero."],
  ["resultant of a vector","Resultant of a vector is a single vector havin the same effect as two or more vectors acting together."],
  ["boiling point", "Boiling Point is the temperature at whicch the vapour pressure of a substance is equal to the atmospheric pressure."],
  ["enthalpy change", "Enthalpy Change is the amount heat/energy released/absorbed in a chemical reaction."],
  ["limiting reagent", "Limiting Reagent is the substance that is totally used up in  a chemical reaction."],
  ["empirical formula", "Empirical Formula is the smallest whole number ratio of elments that make up a substance."],
  ["concentration", "Concentration is the amount of solute per litre of solution OR Concentraion is the number of moles of a substance per cubic decimeter of solution."],
  ["standard solution", "Standard Solution is a solution of known concentration."],
  ["activated complex", "Activated Complex is the unstable transition state from reactants to products."],
  ["lowry bronsted base", "Lowry-Bronsted Base is a proton/H+ ion acceptor."],
  ["acid base indicator", "Acid-Base Indicator is a weak acid, or a weak base, which colour changes at the H+ ion concentration or OH- concentration in a solution changes."],
  ["arrhenius acid", "Arrhenius Acid is a substance that produces hydronium ions when dissolved in water."],
  ["limiting reactant", "A Limiting Rectant is a reactant that is used up completely during a chemical reaction."],
  ["activation energy", "Activation Energy is the minimum energy required to initiate or start a reaction OR Activation Energy is the minimum energy that must be absorbed to cause it to react."],
  ["diprotic acid", "A Diprotic Acid ia an acid that can donate 2 protons."]
]);

function checkAnswer() {
  const Question = document.getElementById("input").value;

  let Answer = "";
  
  if (inputMap.has(Question)) {
    Answer = inputMap.get(Question);
  }
  else {
    Answer = "Result not found!";
  }
  
  document.getElementById("output").textContent = Answer;
  
};
