document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggles');
    var skillsLists = document.querySelectorAll('.skills-list');
    var skillHeadings = document.querySelectorAll('#skills h3');
    var skillBottomHr = document.getElementById('skills-bottom-hr');
    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', function () {
            skillsLists.forEach(function (list) {
                list.classList.toggle('hidden');
            });
            skillHeadings.forEach(function (heading) {
                heading.classList.toggle('hidden');
            });
            if (skillBottomHr) {
                skillBottomHr.classList.toggle('hidden');
            }
        });
    }
});
