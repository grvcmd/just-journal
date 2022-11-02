## API Routes
*Routes are prefaced by http://localhost:3000/*
### API Routes for Topics
| Method | Route | Function |
| ------ | ----- | -------- |
| Get    | /topics | Gets all topics |
| Get    | /topics/:topicName | Gets all topics containing the given topicName |
| Get    | /topics/id/:topicID | Gets the first topic with the given topicID |
| Post | /topics | Creates a topic document |
| Delete | /topics/topicID | Deletes topic with the given topicID |
| Put | /topics/topicID | Updates Topic with given topicID |
| Get | topics/topic-entry/:topicID | Gets all entries under the given topicID |

### API Routes for Entries
| Method | Route | Function |
| ------ | ----- | -------- |
| Get    | /entries | Gets all entries |
| Get | /entries/:entryName | Get all entries containing the given entryName |
| Get | /entries/id/:entryID | Get entry with given entryID
| Post | /entries | Creates an entry document |
| Delete | /entries/:entryName | Delete entry with given entryName |
| Put | /entries/:entryName | Update entry with given entryID