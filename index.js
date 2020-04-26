import { WorkerManger } from 'core-element'
import connect from 'core-dbjs-connect'
import { connectReact } from 'core-event'

function getAll(name, view, db, worker, $platform, config) {

    let WORKER = new WorkerManger({
        config,
        worker
    }, $platform, name)

    let view_event = connectReact(view);

    let view_event_db = connect(name, db, null, WORKER.clearRecord.bind(WORKER))(view_event);

    return {
        VIEW: view_event_db, WORKER
    }
}

export default getAll



