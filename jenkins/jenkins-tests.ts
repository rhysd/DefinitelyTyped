import * as J from 'jenkins';

const jenkins = J({ baseUrl: 'http://user:pass@localhost:8080', crumbIssuer: true });

jenkins.info(function(err: Error, data: any) {
  if (err) throw err;

  console.log('info', data);
});

jenkins.build.get('example', 1, function(err: Error, data: any) {
  if (err) throw err;

  console.log('build', data);
});

jenkins.build.log('example', 1, function(err: Error, data: any) {
  if (err) throw err;

  console.log('log', data);
});

var log = jenkins.build.logStream('example', 1);

log.on('data', function(text: string) {
  process.stdout.write(text);
});

log.on('error', function(err: Error) {
  console.log('error', err);
});

log.on('end', function() {
  console.log('end');
});

jenkins.build.stop('example', 1, function(err: Error) {
  if (err) throw err;
});

jenkins.job.build('example', function(err: Error, data: any) {
  if (err) throw err;

  console.log('queue item number', data);
});

jenkins.job.build({ name: 'example', parameters: { name: 'value' } }, function(err: Error) {
  if (err) throw err;
});

jenkins.job.config('example', function(err: Error, data: any) {
  if (err) throw err;

  console.log('xml', data);
});

jenkins.job.config('example', '<xml></xml>', function(err: Error) {
  if (err) throw err;
});

jenkins.job.copy('fromJob', 'example', function(err: Error) {
  if (err) throw err;
});

jenkins.job.create('example', '<xml></xml>', function(err: Error) {
  if (err) throw err;
});

jenkins.job.destroy('example', function(err: Error) {
  if (err) throw err;
});

jenkins.job.disable('example', function(err: Error) {
  if (err) throw err;
});

jenkins.job.enable('example', function(err: Error) {
  if (err) throw err;
});

jenkins.job.exists('example', function(err: Error, exists: boolean) {
  if (err) throw err;

  console.log('exists', exists);
});

jenkins.job.get('example', function(err: Error, data: any) {
  if (err) throw err;

  console.log('job', data);
});

jenkins.job.list(function(err: Error, data: any) {
  if (err) throw err;

  console.log('jobs', data);
});

jenkins.node.config('example', function(err: Error, data: any) {
  if (err) throw err;

  console.log('xml', data);
});

jenkins.node.create('slave', function(err: Error) {
  if (err) throw err;
});

jenkins.node.destroy('slave', function(err: Error) {
  if (err) throw err;
});

jenkins.node.disconnect('slave', 'no longer used', function(err: Error) {
  if (err) throw err;
});

jenkins.node.disable('slave', 'network failure', function(err: Error) {
  if (err) throw err;
});

jenkins.node.enable('slave', function(err: Error) {
  if (err) throw err;
});

jenkins.node.exists('slave', function(err: Error, exists: boolean) {
  if (err) throw err;

  console.log('exists', exists);
});

jenkins.node.get('slave', function(err: Error, data: any) {
  if (err) throw err;

  console.log('node', data);
});

jenkins.node.list(function(err: Error, data: any) {
  if (err) throw err;

  console.log('nodes', data);
});

jenkins.queue.list(function(err: Error, data: any) {
  if (err) throw err;

  console.log('queues', data);
});

jenkins.queue.item(130, function(err: Error, data: any) {
  if (err) throw err;

  console.log('item', data);
});

jenkins.queue.cancel(23, function(err: Error) {
  if (err) throw err;
});

jenkins.view.config('example', function(err: Error, data: any) {
  if (err) throw err;

  console.log('xml', data);
});

jenkins.view.config('example', '<xml></xml>', function(err: Error) {
  if (err) throw err;
});

jenkins.view.create('example', 'list', function(err: Error) {
  if (err) throw err;
});

jenkins.view.destroy('example', function(err: Error) {
  if (err) throw err;
});

jenkins.view.exists('example', function(err: Error, exists: boolean) {
  if (err) throw err;

  console.log('exists', exists);
});

jenkins.view.get('example', function(err: Error, data: any) {
  if (err) throw err;

  console.log('view', data);
});

jenkins.view.list(function(err: Error, data: any) {
  if (err) throw err;

  console.log('views', data);
});

jenkins.view.add('example', 'jobExample', function(err: Error) {
  if (err) throw err;
});

jenkins.view.remove('example', 'jobExample', function(err: Error) {
  if (err) throw err;
});
