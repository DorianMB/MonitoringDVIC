export default class MissionService {
  getMissions() {
    return JSON.parse(localStorage.missions);
  }

  getMissionsByUserId(id: number) {
    const missionsList = this.getMissions();
    return missionsList.filter(
      (mission: any) => {
        return mission.userId === id;
      }
    );
  }

  getMissionById(id: number|string) {
    const missionsList = this.getMissions();
    return missionsList.find((mission: any) => {
      return mission.id.toString() === id.toString();
    });
  }

  saveMission(mission: any, userId: number) {
    mission.userId = userId;
    let max = 0;
    const missionList = this.getMissions();
    missionList.forEach((item: any) => {
      if (item.id > max) {
        max = item.id;
      }
    });
    mission.id = max + 1;
    missionList.push(mission);
    localStorage.missions = JSON.stringify(missionList);
  }

  updateMission(mission: any) {
    const missionList = this.getMissions();
    const index = missionList.findIndex(
      (item: any) => (item.id === mission.id)
    );
    missionList[index] = mission;
    localStorage.missions = JSON.stringify(missionList);
  }

  deleteMission(id: number|string) {
    const missionsList = this.getMissions();
    const index = missionsList.findIndex(
      (item: any) => (item.id.toString() === id.toString())
    );
    missionsList.splice(index,1);
    localStorage.missions = JSON.stringify(missionsList);
  }
}