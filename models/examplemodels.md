// Assignment {
//       creator: UserId,
//       title: string,
//       details: string,
//       class: ClassId,
//       links: [{ title: string, href: string }]
//       dueDate: DateTime,
//       checklistItems: [CheckListItemId]
//     }
    
//     FollowedAssignment {
//       user: userID,
//       assignment: AssignmentId,
//       isDone: bool,
//       checklist: [{ item: ChecklistItemId, isDone: bool }]
//     }
    
//     Class {
//       creator: UserId,
//       members: [UserId]
//     }
    
//     ChecklistItem {
//       title: string
//     }