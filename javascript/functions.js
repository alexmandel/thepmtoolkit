function showAll() {
	document.getElementById('plan').style.opacity = 1;
	document.getElementById('research').style.opacity = 1;
	document.getElementById('understand').style.opacity = 1;
	document.getElementById('ideate').style.opacity = 1;
	document.getElementById('evaluate').style.opacity = 1;
}
function showPlan() {
	document.getElementById('research').style.opacity = .3;
	document.getElementById('understand').style.opacity = .3;
	document.getElementById('ideate').style.opacity = .3;
	document.getElementById('evaluate').style.opacity = .3;
}
function showResearch() {
	document.getElementById('plan').style.opacity = .3;
	document.getElementById('understand').style.opacity = .3;
	document.getElementById('ideate').style.opacity = .3;
	document.getElementById('evaluate').style.opacity = .3;
}
function showUnderstand() {
	document.getElementById('research').style.opacity = .3;
	document.getElementById('plan').style.opacity = .3;
	document.getElementById('ideate').style.opacity = .3;
	document.getElementById('evaluate').style.opacity = .3;
}
function showIdeate() {
	document.getElementById('research').style.opacity = .3;
	document.getElementById('understand').style.opacity = .3;
	document.getElementById('plan').style.opacity = .3;
	document.getElementById('evaluate').style.opacity = .3;
}
function showEvaluate() {
	document.getElementById('research').style.opacity = .3;
	document.getElementById('understand').style.opacity = .3;
	document.getElementById('ideate').style.opacity = .3;
	document.getElementById('plan').style.opacity = .3;
}

var currentElement = "start";

function changeElement(tool) {
	makeInvisible();
	makeVisible(tool);
}

function makeVisible(tool2) {
	document.getElementById(tool2).style.display = "inline";
	currentElement = tool2;
}

function makeInvisible() {
	$(currentElement).fadeOut(3000);
	document.getElementById(currentElement).style.display = "none";
}

function hideStuff() {
	document.getElementById('project_definition').style.display = "none";
	document.getElementById('failure_scenarios').style.display = "none";
	document.getElementById('task_assignment').style.display = "none";
	document.getElementById('assumption_map').style.display = "none";

	document.getElementById('initial_research_plan').style.display = "none";
	document.getElementById('directed_research_plan').style.display = "none";
	document.getElementById('observation').style.display = "none";
	document.getElementById('contextual_inquiry').style.display = "none";
	document.getElementById('interview').style.display = "none";
	document.getElementById('usability_testing').style.display = "none";
	document.getElementById('domain_research').style.display = "none";

	document.getElementById('persona_variable_map').style.display = "none";
	document.getElementById('persona').style.display = "none";
	document.getElementById('research_affinity_group').style.display = "none";
	document.getElementById('opportunity_identifier').style.display = "none";
	document.getElementById('representation_models').style.display = "none";
	document.getElementById('visual_problem_map').style.display = "none";
	document.getElementById('mood_board').style.display = "none";

	document.getElementById('ideation').style.display = "none";
	document.getElementById('ideation_affinity_group').style.display = "none";
	document.getElementById('decision_matrix').style.display = "none";
	document.getElementById('exploring_an_idea').style.display = "none";
	document.getElementById('dot_voting').style.display = "none";
	document.getElementById('relaxed_constraints').style.display = "none";
	document.getElementById('object_integration').style.display = "none";

	document.getElementById('prototype_analysis').style.display = "none";
	document.getElementById('storyboard').style.display = "none";
	document.getElementById('skit').style.display = "none";
	document.getElementById('wireframe').style.display = "none";
	document.getElementById('site_map').style.display = "none";
}


