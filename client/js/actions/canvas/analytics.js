import CanvasConstants  from "../../constants/canvas";
import Network          from "../../constants/network";

export default {

//=====================================================================
                      //Account analytics

  account_term_analytics(account_id, term_id) {
    return {
      type: CanvasConstants.ACCOUNT_TERM_ANALYTICS,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/activity`
    };
  },

  account_current_analytics(account_id) {
    return {
      type: CanvasConstants.ACCOUNT_CURRENT_ANALYTICS,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/analytics/current/activity`
    };
  },

  account_completed_analytics(account_id) {
    return {
      type: CanvasConstants.ACCOUNT_COMPLETED_ANALYTICS,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/analytics/completed/activity`
    };
  },

  account_term_analytics_grades(account_id, term_id) {
    return {
      type: CanvasConstants.ACCOUNT_TERM_ANALYTICS_GRADES,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/grades`
    };
  },

  account_current_analytics_grades(account_id) {
    return {
      type: CanvasConstants.ACCOUNT_CURRENT_ANALYTICS_GRADES,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/analytics/current/grades`
    };
  },

  account_completed_analytics(account_id) {
    return {
      type: CanvasConstants.ACCOUNT_COMPLETED_ANALYTICS_GRADES,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/analytics/completed/grades`
    };
  },

    account_term_analytics_statistics(account_id, term_id) {
    return {
      type: CanvasConstants.ACCOUNT_TERM_ANALYTICS_STATISTICS,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/statistics`
    };
  },

  account_current_analytics_statistics(account_id) {
    return {
      type: CanvasConstants.ACCOUNT_CURRENT_ANALYTICS_STATISTICS,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/analytics/current/statistics`
    };
  },

  account_completed_analytics_statistics(account_id) {
    return {
      type: CanvasConstants.ACCOUNT_COMPLETED_ANALYTICS_STATISTICS,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/analytics/completed/statistics`
    };
  },


// =================================================================
                     //Course analytics

  course_analytics(course_id) {
    return {
      type: CanvasConstants.COURSE_ANALYTICS,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/analytics/activity`
    };
  },

  course_analytics_assignments(course_id) {
    return {
      type: CanvasConstants.COURSE_ANALYTICS_ASSIGNMENTS,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/analytics/assignments`
    };
  },

  course_analytics_student_summaries(course_id) {
    return {
      type: CanvasConstants.COURSE_ANALYTICS_STUDENT_SUMMARIES,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/analytics/student_summaries`
    };
  },

  course_analytics_student_id(course_id, student_id) {
    return {
      type: CanvasConstants.COURSE_ANALYTICS_STUDENT_ID,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/analytics/users/${student_id}/activity`
    };
  },

  course_analytics_student_assignments(course_id, student_id) {
    return {
      type: CanvasConstants.COURSE_ANALYTICS_STUDENT_ASSIGNMENTS,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/analytics/users/${student_id}/assignments`
    };
  },

  course_analytics_student_message(course_id, student_id) {
    return {
      type: CanvasConstants.COURSE_ANALYTICS_STUDENT_MESSAGE,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/analytics/users/${student_id}/communication`
    };
  },

};
