document.addEventListener('DOMContentLoaded', function() {
    const toggleSkillsButton = document.getElementById('toggles') as HTMLButtonElement;
    const skillsLists = document.querySelectorAll('.skills-list') as NodeListOf<HTMLElement>;
    const skillHeadings = document.querySelectorAll('#skills h3') as NodeListOf<HTMLElement>;
    const skillBottomHr = document.getElementById('skills-bottom-hr') as HTMLHRElement;

    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', () => {

            skillsLists.forEach(list => {
                list.classList.toggle('hidden');
            });
            

            skillHeadings.forEach(heading => {
                heading.classList.toggle('hidden');
            });


            if (skillBottomHr) {
                skillBottomHr.classList.toggle('hidden');
            }
        });
    }
});